import React, { Component } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteInvoice, editInvoice, setSelectedInvoiceId } from "../actions";
import InvoiceModal from "./InvoiceModal";
import { AiFillEye, AiFillDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

class InvoiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedInvoice: {},
    };
  }

  // To delete an invoice
  handleDelete = (id) => {
    this.props.deleteInvoice(id);
  };

  // To edit an invoice
  handleEdit = (id) => {
    this.props.setSelectedInvoiceId(id);
  };

  // To get the invoice by id
  getInvoiceById = (id) => {
    return this.props.invoices.find((item) => item.id === id);
  };

  // To view an invoice
  handleView = (id) => {
    this.setState({ isOpen: true });
    this.setState({ selectedInvoice: this.getInvoiceById(id) });
  };

  // To close the modal
  closeModal = () => this.setState({ isOpen: false });
  
  
  render() {
    const invoices = this.props.invoices;
    const selectedInvoice = this.state.selectedInvoice;
    return (
      <>
        <InvoiceModal
          showModal={this.state.isOpen}
          closeModal={this.closeModal}
          info={selectedInvoice}
          items={selectedInvoice.items}
          currency={selectedInvoice.currency}
          subTotal={selectedInvoice.subTotal}
          taxAmmount={selectedInvoice.taxAmmount}
          discountAmmount={selectedInvoice.discountAmmount}
          total={selectedInvoice.total}
        />
        <Container>
          <h2>Invoice List</h2>
          <ListGroup className="rounded">
            {invoices.length !== 0 ? (
              invoices.map((item) => (
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-center"
                  key={item.id}
                  style={{ marginBlock: "0.5rem", borderRadius: "0.5rem" }}
                >
                  <div className="d-flex flex-column">
                    <div className="me-3">
                      <span className="fw-bold">Customer Name:</span>
                      <span className="ms-2">{item.billTo}</span>
                    </div>
                    <div className="me-3">
                      <span className="fw-bold">Customer Email:</span>
                      <span className="ms-2">{item.billToEmail}</span>
                    </div>
                    <div className="me-3">
                      <span className="fw-bold">Customer Address:</span>
                      <span className="ms-2">{item.billToAddress}</span>
                    </div>
                    <div className="me-3">
                      <span className="fw-bold">Invoice Date:</span>
                      <span className="ms-2">{item.dateOfIssue}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: ".50rem",
                    }}
                  >
                    <Button
                      variant="light"
                      onClick={() => this.handleView(item.id)}
                    >
                      <AiFillEye size={15} />
                      &nbsp; View
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => this.handleDelete(item.id)}
                    >
                      <AiFillDelete size={15} />
                      &nbsp; Delete
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.handleEdit(item.id)}
                    >
                      <GoPencil size={15} />
                      &nbsp; Edit
                    </Button>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="d-flex justify-content-center align-items-center">
                <span className="opacity-75">No invoices found</span>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    invoices: state.invoices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteInvoice: (id) => dispatch(deleteInvoice(id)),
    editInvoice: (id) => dispatch(editInvoice(id)),
    setSelectedInvoiceId: (id) => dispatch(setSelectedInvoiceId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);
