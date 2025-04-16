import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Form,
  Table,
  Pagination,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const ChargebackRefund = () => {
  const [key, setKey] = useState("refunds"); // State to manage active tab

  const noDataMessage = (
    <tr>
      <td colSpan="6" className="text-center">
        No Data found
      </td>
    </tr>
  );

  return (
    <div className="p-3 border rounded bg-white">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {/* Refund Tab */}
        <Tab eventKey="refunds" title="Refund">
          <div className="d-flex mb-3">
            <Form.Select style={{ width: "100px", marginRight: "10px" }}>
              <option>10</option>
              {/* Add more options as needed */}
            </Form.Select>
            <div style={{ flex: 1 }}>
              <InputGroup>
                <FormControl placeholder="Search" />
                <Button variant="outline-secondary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Refund gid</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Notes</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>{noDataMessage}</tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Tab>

        {/* Chargeback Tab */}
        <Tab eventKey="chargebacks" title="Chargeback">
          <div className="d-flex mb-3">
            <Form.Select style={{ width: "100px", marginRight: "10px" }}>
              <option>10</option>
              {/* Add more options as needed */}
            </Form.Select>
            <div style={{ flex: 1 }}>
              <InputGroup>
                <FormControl placeholder="Search" />
                <Button variant="outline-secondary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </div>
          </div>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Chargeback gid</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>{noDataMessage}</tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ChargebackRefund;
