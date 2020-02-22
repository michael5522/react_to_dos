import React from 'react';
import ListItem from './list_item';
import {ListContext} from '../list_context';
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

function ToDoList(props){

    return (
        <ListContext.Consumer>
            {
                (toDos) => {
                    const toDoElements = toDos.list.map((item) => {
                        return <ListItem key={item._id} title={item.title} />
                    });

                    return (
                        <ol className="list-group">
                            {toDoElements}
                        </ol>
                    )
                }
            }
        </ListContext.Consumer>
    );
}


export default ToDoList;
