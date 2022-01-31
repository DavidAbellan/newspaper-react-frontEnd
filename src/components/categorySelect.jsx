function CategorySelect (props) {
       let format = Object.values(props);
    
       return(
       <div>
       <select  defaultValue={"Categorías"} className="categorySelect">
           <option >Categorías</option>
           {format.map((a,k) => <option key={k} value= {a.name}>{a.name}</option>)}
       </select>
       </div>)
    ;

}
export default CategorySelect;