import React from 'react';
import ToDoList from './to_do_list';
import Button from './button';
import AddToDoForm from './add_to_do_form';
import {ListContext} from '../list_context';

// const toDos = [
//     {
//         _id: '01',
//         title: 'wash car'
//     },
//     {
//         _id: '02',
//         title: 'wash tv'
//     },
//     {
//         _id: '03',
//         title: 'wash phone'
//     },
//     {
//         _id: '04',
//         title: 'wash pizza'
//     }
// ];

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            addItem: (item)=> this.addToDo(item),
            list: [],
            error:''
        };


    }

    componentDidMount(){
        this.getToDos();
    }
    //method 1
    addToDo(item){
        // const {list} = this.state;
        // const _id = list.length + 1;

        // this.setState({
        //     list: [
        //         ...list,
        //         {
        //             _id : _id,
        //             title: item.title
        //         }
        //     ]
        // });
        fetch('http://api.reactprototypes.com/todos?key=m0120demouser123', {
            method: 'POST',
            body: JSON.stringify(item)
        }).then(resp => {
            return resp.json()
        }).then( data => {
            // console.log('Add Item Response Data:', data);
            this.getToDos();
        }).catch( error => {
            console.log('caught error', error);
        });
    }
    //method 2
    // async addToDo(item){
    //     await fetch('http://api.reactprototypes.com/todos?key=m0120demouser123',{
    //         method: 'POST',
    //         body: JSON.stringify(item)
    //     });


    //     this.getToDos();
    // }

        // method 1
    // getToDos(){
    //     fetch('http://api.reactprototypes.com/todos?key=m0120demouser123').then(resp =>{
    //         return resp.json();
    //     }).then(data => {
    //         console.log('Data:', data.todos);
    //         this.setState({
    //             list: data.todos
    //         });
    //     });
    // }

        // method 2
    async getToDos(){
        const resp = await fetch('http://api.reactprototypes.com/todos?key=m0120demouser123');
        const data = await resp.json();

        this.setState({
            list: data.todos
        });
    }

    render(){
        // const {list } = this.state;
        return(

            <ListContext.Provider value={this.state}>
                <div className="container">
                    <h1 className="text-center my-4">To Do List</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <ToDoList  />
                        </div>
                        <div className="col-md-4">
                            {/* <Button/> */}
                            <AddToDoForm  />
                        </div>
                    </div>
                </div>
            </ListContext.Provider>
        );
    }
}


export default App;
