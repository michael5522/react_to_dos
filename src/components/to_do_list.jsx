import React from 'react';
import ListItem from './list_item';

const toDos = [
    {
        id: '01',
        title: 'wash car'
    },
    {
        id: '02',
        title: 'wash tv'
    },
    {
        id: '03',
        title: 'wash phone'
    },
    {
        id: '04',
        title: 'wash pizza'
    }
]
// function ToDoList(props){
//     const toDoElements = toDos.map ((item)=>{
//         return <ListItem key={item.id} title={item.title} />
//     });

//     // const toDoElements = [
//     //     <listItem />
//     //     <listItem />
//     //     <listItem />
//     //     <listItem />
//     // ]
//     return (
//         <ol>
//             {toDoElements}
//         </ol>
//     );
// }

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            list: []
        };
    }
    render(){
        const toDoElements = toDos.map ((item)=>{
            return <ListItem key={item.id} title={item.title} />
        });
        return (
            <ol>
                {toDoElements}
            </ol>
        );
    }
}

export default ToDoList;