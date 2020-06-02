import React from 'react';
import swal from 'sweetalert2';

import budgetImg from '../budget.jpg'
import Header from './Header';
import Footer from './Footer';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {auth, firestore} from './Firebase/firebase';


function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

function Link(props) {
  return (
    <div className="links"><a href="#url/props.name??">{props.name}</a></div>
  )
}

if(localStorage.getItem("userId") != null) {
var docRef = firestore.collection('users').doc(localStorage.getItem("userId"));
}
var income;
var benefits;
var savings;
var food ;
var housing;
var utilities;
var debts;
var transportation;
var personal;
var lifeinsurance;
var monthly;


function onAfterSaveCell(row, cellName, cellValue) {

  var income = '';
  let estimated = '';
  let actual = '';

  for (var prop in row) {
    if(prop == "income") {
      income = row[prop];
    }
    if(prop == "estimated") {
      estimated = row[prop];
    }
    if(prop == "actual") {
      actual = row[prop];
    }
  }

  docRef.get().then(function(doc) {
    if (doc.exists) {
  let item = doc.data();
    item[income] = [estimated, actual];
    docRef.update(item);
    }
    else {
      alert("item doesn't exist");
    }
  });
}

function onBeforeSaveCell(row, cellName, cellValue) {
  // You can do any validation on here for editing value,
  // return false for reject the editing
  return true;
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
  afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

class Budget extends React.Component {
  constructor(props) {
      super();
      this.state = {
        isLoading:true
      }
  }  
myData() {
    return docRef.get().then(function(doc) {
      console.log("looking");
      if (doc.exists) {
          let item = doc.data();
          income = [{
            income: 'wages',
            estimated: item["wages"][0],
            actual: item["wages"][1]
          }, {
            income: 'bonus',
            estimated: item['bonus'][0],
            actual: item['bonus'][1]
          },{
            income: 'commission',
            estimated: item['commission'][0],
            actual: item['commission'][1]
          },{
            income: 'reimbursements',
            estimated: item['reimbursements'][0],
            actual: item['reimbursements'][1]
          },{
            income: 'alimony income',
            estimated: item['alimony income'][0],
            actual: item['alimony income'][1]
          }
          ];
          benefits = [{
            income: '401k',
            estimated: item['401k'][0],
            actual: item['401k'][1]
          },
          {
            income: 'medical',
            estimated: item['medical'][0],
            actual: item['medical'][1]
          },
          {
            income: 'dental',
            estimated: item['dental'][0],
            actual: item['dental'][1]
          },
          {
            income: 'vision',
            estimated: item['dental'][0],
            actual: item['dental'][1]
          },
          {
            income: 'health savings (hsa)',
            estimated: item['health savings (hsa)'][0],
            actual: item['health savings (hsa)'][1]
          }
          ]
          savings = [{
            income: 'emergency fund',
            estimated: item['emergency fund'][0],
            actual: item['emergency fund'][1]
          },
          {
            income: 'investments',
            estimated: item['investments'][0],
            actual: item['investments'][1]
          },
          {
            income: 'ira',
            estimated: item['ira'][0],
            actual: item['ira'][1]
          },
          {
            income: 'vacation',
            estimated: item['vacation'][0],
            actual: item['vacation'][1]
          },
          {
            income: 'gifts',
            estimated: item['gifts'][0],
            actual: item['gifts'][1]
          }
          ]
          food = [{
            income: 'groceries',
            estimated: item['groceries'][0],
            actual: item['groceries'][1]
          },
          {
            income: 'dining out',
            estimated: item['dining out'][0],
            actual: item['dining out'][1]
          }
          ]
          housing = [{
            income: 'rent',
            estimated: item['rent'][0],
            actual: item['rent'][1]
          },
          {
            income: 'real estate',
            estimated: item['real estate'][0],
            actual: item['real estate'][1]
          },
          {
            income: 'insurance',
            estimated: item['insurance'][0],
            actual: item['insurance'][1]
          },
          {
            income: 'home maintenance',
            estimated: item['home maintenance'][0],
            actual: item['home maintenance'][1]
          },
          {
            income: 'security',
            estimated: item['security'][0],
            actual: item['security'][1]
          }
          ]
          utilities = [{
            income: 'water',
            estimated: item['water'][0],
            actual: item['water'][1]
          },
          {
            income: 'gas',
            estimated: item['gas'][0],
            actual: item['gas'][1]
          },
          {
            income: 'electric',
            estimated: item['electric'][0],
            actual: item['electric'][1]
          },
          {
            income: 'sewer',
            estimated: item['sewer'][0],
            actual: item['sewer'][1]
          },
          {
            income: 'trash',
            estimated: item['trash'][0],
            actual: item['trash'][1]
          },
          {
            income: 'phone',
            estimated: item['phone'][0],
            actual: item['phone'][1]
          },
          {
            income: 'internet',
            estimated: item['internet'][0],
            actual: item['internet'][1]
          },
          {
            income: 'cable',
            estimated: item['cable'][0],
            actual: item['cable'][1]
          },
          {
            income: 'music and books',
            estimated: item['music and books'][0],
            actual: item['music and books'][1]
          }
          ]
          debts = [{
            income: 'credit',
            estimated: item['credit'][0],
            actual: item['credit'][1]
          },
          {
            income: 'store cards',
            estimated: item['store cards'][0],
            actual: item['store cards'][1]
          },
          {
            income: 'student loans',
            estimated: item['student loans'][0],
            actual: item['student loans'][1]
          },
          {
            income: 'business expenses',
            estimated: item['business expenses'][0],
            actual: item['business expenses'][1]
          },
          {
            income: 'vet bills',
            estimated: item['vet bills'][0],
            actual: item['vet bills'][1]
          },
          {
            income: 'alimony debt',
            estimated: item['alimony debt'][0],
            actual: item['alimony debt'][1]
          }
          ]
          transportation = [
          {
            income: 'auto payment',
            estimated: item['auto payment'][0],
            actual: item['auto payment'][1]
          },
          {
            income: 'auto insurance',
            estimated: item['auto insurance'][0],
            actual: item['auto insurance'][1]
          },
          {
            income: 'gasoline',
            estimated: item['gasoline'][0],
            actual: item['gasoline'][1]
          },
          {
            income: 'maintenance',
            estimated: item['maintenance'][0],
            actual: item['maintenance'][1]
          },
          {
            income: 'parking and tolls',
            estimated: item['parking and tolls'][0],
            actual: item['parking and tolls'][1]
          }
          ]
          personal = [{
            income: 'clothing',
            estimated: item['clothing'][0],
            actual: item['clothing'][1]
          },
          {
            income: 'laundry',
            estimated: item['laundry'][0],
            actual: item['laundry'][1]
          },
          {
            income: 'vitamins',
            estimated: item['vitamins'][0],
            actual: item['vitamins'][1]
          },
          {
            income: 'memberships',
            estimated: item['memberships'][0],
            actual: item['memberships'][1]
          },
          {
            income: 'prescriptions',
            estimated: item['prescriptions'][0],
            actual: item['prescriptions'][1]
          },
          {
            income: 'recreation',
            estimated: item['recreation'][0],
            actual: item['recreation'][1]
          },
          {
            income: 'hair and nails',
            estimated: item['hair and nails'][0],
            actual: item['hair and nails'][1]
          }
          ]
          lifeinsurance = [{
            income: 'term',
            estimated: item['term'][0],
            actual: item['term'][1]
          },
          {
            income: 'permanent',
            estimated: item['permanent'][0],
            actual: item['permanent'][1]
          },
          {
            income: 'long-term care',
            estimated: item['long-term care'][0],
            actual: item['long-term care'][1]
          }
          ]
          monthly= [{
            income: 'total income',
            estimated: item['total income'][0],
            actual: item['total income'][1]
          },
          {
            income: 'total expenses',
            estimated: item['total expenses'][0],
            actual: item['total expenses'][1]
          }
          ]
      }
      else {
        console.log("doesn't exist");
      }
    });
  }

componentDidMount(){
  this.setState({isLoading:true});
  this.myData().then(() => {
  this.setState({isLoading:false});
  });
}

render (){
  if(!this.state.isLoading) {
    return (
      <div>
        <Header/>
        <RenderImage class = "budgetImg" url={budgetImg}/>
        <Header1 name = "your budget"/>
        <div class = "budget_table">
        <BootstrapTable data={ income } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Income</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ benefits } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Benefits</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ savings } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Savings</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ food } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Food</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ housing } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Housing</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ utilities } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Utilities</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ debts } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Debt</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ transportation } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Transportation</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ personal } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Personal</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ lifeinsurance } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Life Insurance</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        <BootstrapTable data={ monthly } cellEdit = {cellEditProp}>
          {/*add data here  ^^^ */}
          <TableHeaderColumn dataField='income' isKey>Monthly Cash flow</TableHeaderColumn>
          <TableHeaderColumn dataField='estimated'>Estimated</TableHeaderColumn>
          <TableHeaderColumn dataField='actual'>Actual</TableHeaderColumn>
        </BootstrapTable>
        <br></br>
        </div>
        <Footer/>
      </div>
    );
    }
    else {
      return (<p>loading</p>)
    }
  }
} 

export default Budget;     