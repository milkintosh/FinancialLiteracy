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
  alert(`Save cell ${cellName} with value ${cellValue}`);

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
    alert(item[income]);
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
            estimated: 'value',
            actual: 'value'
          }, {
            income: 'bonus',
            estimated: 'value',
            actual: 'value'
          },{
            income: 'commission',
            estimated: 'value',
            actual: 'value'
          },{
            income: 'reimbursements',
            estimated: 'value',
            actual: 'value'
          },{
            income: 'alimony income',
            estimated: 'value',
            actual: 'value'
          }
          ];
          benefits = [{
            income: '401k',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'medical',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'dental',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'vision',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'health savings (hsa)',
            estimated: 'value',
            actual: 'value'
          }
          ]
          savings = [{
            income: 'emergency fund',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'investments',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'ira',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'vacation',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'gifts',
            estimated: 'value',
            actual: 'value'
          }
          ]
          food = [{
            income: 'groceries',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'dining out',
            estimated: 'value',
            actual: 'value'
          }
          ]
          housing = [{
            income: 'rent',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'real estate',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'insurance',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'home maintenance',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'security',
            estimated: 'value',
            actual: 'value'
          }
          ]
          utilities = [{
            income: 'water',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'gas',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'electric',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'sewer',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'trash',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'phone',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'internet',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'cable',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'music and books',
            estimated: 'value',
            actual: 'value'
          }
          ]
          debts = [{
            income: 'credit',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'store cards',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'student loans',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'business expenses',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'vet bills',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'alimony debt',
            estimated: 'value',
            actual: 'value'
          }
          ]
          transportation = [
          {
            income: 'auto payment',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'auto insurance',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'gasoline',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'maintenance',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'parking and tolls',
            estimated: 'value',
            actual: 'value'
          }
          ]
          personal = [{
            income: 'clothing',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'laundry',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'vitamins',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'memberships',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'prescriptions',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'recreation',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'hair and nails',
            estimated: 'value',
            actual: 'value'
          }
          ]
          lifeinsurance = [{
            income: 'term',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'permanent',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'long-term care',
            estimated: 'value',
            actual: 'value'
          }
          ]
          monthly= [{
            income: 'total income',
            estimated: 'value',
            actual: 'value'
          },
          {
            income: 'total expenses',
            estimated: 'value',
            actual: 'value'
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