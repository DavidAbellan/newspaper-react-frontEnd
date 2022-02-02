function article_category_button_detail (props) {
    //por aqui paso un array [nombre,id]
    //hay que hacer un link con el id
    let name = props[0]
    return (
        <div>
         <button  className="articleCategoryButton" >{name}</button>
        </div>
    );
}

export default article_category_button_detail;