import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InstanceAlert.css"
class InstanceAlert extends Component{
    render(){
return (
  <Table>
    <thead>
      <tr>
        <th>Instances Alert</th>
        <th>
          <Button style={{ backgroundColor: "#F35536" }}>View All</Button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <Button color="link">Azure</Button>
        </th>
        <td>
          <div className="views">
            <span>12</span> <FontAwesomeIcon icon={faEye} size="sm" />
          </div>
        </td>
      </tr>
      <tr>
        <th>
          <Button color="link">Figma</Button>
        </th>
        <td>
          <div className="views">
            <span>42</span> <FontAwesomeIcon icon={faEye} size="sm" />
          </div>
        </td>
      </tr>
      <tr>
        <th>
          <Button color="link">Ajex</Button>
        </th>
        <td>
          <div className="views">
            <span>32</span> <FontAwesomeIcon icon={faEye} size="sm" />
          </div>
        </td>
      </tr>
      <tr>
        <th>
          <Button color="link">Adobe</Button>
        </th>
        <td>
          <div className="views">
            <span>22</span> <FontAwesomeIcon icon={faEye} size="sm" />
          </div>
        </td>
      </tr>
      <tr>
        <th>
          <Button color="link">Hipster</Button>
        </th>
        <td>
          <div className="views">
            <span>2</span> <FontAwesomeIcon icon={faEye} size="sm" />
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
);
    }
}
export default InstanceAlert; 