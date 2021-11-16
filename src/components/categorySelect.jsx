function CategorySelect (props) {
       let format = Object.values(props);
    
       return(
       <div>
       <select className="categorySelect">
           <option disabled selected>Categorías</option>
           {format.map(a => <option value= {a.name}>{a.name}</option>)}
       </select>
       </div>)
    ;

}
export default CategorySelect;