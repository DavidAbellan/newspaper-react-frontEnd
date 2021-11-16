function article_category_button (props) {
        let array = Object.values(props);
        return (
            <div>
            {array.map(e => <button className="articleCategoryButton" >{e}</button>)}
            </div>
        );
}

export default article_category_button