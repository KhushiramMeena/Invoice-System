import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceList from "./components/InvoiceList";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { setSelectedInvoiceId } from "./actions";
import { bindActionCreators } from "redux";

class App extends Component {
  openModal = () => {
    this.setState({ isFormOpen: true });
  };
  closeFormModal = () => this.props.setSelectedInvoiceId(null);
  openFormModal = () => this.props.setSelectedInvoiceId(1);
  render() {
    const selectedInvoiceId = this.props.selectedInvoiceId;
    return (
      <div className="App d-flex flex-column align-items-center justify-content-start">
        <Container className="h-full w-70 p-4">
          <Button
            variant="primary"
            className="w-30"
            onClick={
              selectedInvoiceId ? this.closeFormModal : this.openFormModal
            }
          >
            {selectedInvoiceId ? "← Invoice List" : "+ Create Invoice"}
          </Button>
          {selectedInvoiceId ? <InvoiceForm /> : <InvoiceList />}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedInvoiceId: state.selectedInvoiceId,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setSelectedInvoiceId }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
