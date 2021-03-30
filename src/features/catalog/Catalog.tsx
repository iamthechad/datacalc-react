import React from 'react';
import {Card, CardContent, Icon, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectCatalogCategories} from "./catalogSlice";

// let SelectableList = makeSelectable(List);
export function Catalog() {
    const categories = useSelector(selectCatalogCategories);
    const [selectedCategory, setSelectedCategory] = React.useState("financial");
    const handleListItemClick = (item: string) => {
        console.log("selected item", item);
        setSelectedCategory(item);
    };
    console.log("categories?", categories);
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">Categories</Typography>
                <List>
                    {Object.keys(categories).sort().map(key =>
                        <ListItem
                            button
                            key={key}
                            onClick={() => handleListItemClick(key)}
                            selected={selectedCategory === key}>
                            <ListItemIcon>
                                <Icon>{categories[key].icon}</Icon>
                            </ListItemIcon>
                            <ListItemText>{categories[key].name}</ListItemText>
                        </ListItem>
                    )}
                </List>
            </CardContent>
        </Card>
    )
}

/*Catalog.propTypes = {
  catalog: React.PropTypes.object.isRequired
};*/

export default Catalog;
