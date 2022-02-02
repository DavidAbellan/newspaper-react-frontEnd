function article_category_button (props) {
        let array = Object.values(props);
        console.log(array);
        return (
            <div>
            {array.map((e,k) => <button key={k} className="articleCategoryButton" >{e[0]}</button>)}
            </div>
        );
}

export default article_category_button