import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const RestaurantItem = ({ item, itemid, deleteItem, editItem }) => {
    return (
        <Card sx={{ maxWidth: 350, marginBottom: 2, width: '100%', height: 200 }} /* Set a fixed height for the card */>
            <CardContent>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {item.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        marginBottom: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {item.description}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                        fontStyle: 'italic',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {item.location}
                </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                <IconButton onClick={() => editItem(itemid)} color="primary">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </IconButton>
                <IconButton onClick={() => deleteItem(itemid)} color="error">
                    <FontAwesomeIcon icon={faTrash} />
                </IconButton>
            </div>
        </Card>
    );
};

export default RestaurantItem;
