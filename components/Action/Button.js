import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addAction, removeAction } from '../../store/action';
import styles from './style';
import { DEFINE, IMAGES } from '../../contains';


export default function Button({ data, status }) {
    const listData = useSelector((state) => state.listData);
    const dispatch = useDispatch();

    const activeItem = listData.find((item) => item.id === data.id);
    const activeStatus = activeItem?.status;

    const onReaction = (status) => {
        if (activeItem && activeStatus === status) {
            dispatch(removeAction(data.id));
        } else {
            dispatch(addAction(data.id, status));
        }
    }

    let style, image, number;
    switch (status) {
        case DEFINE.REACTION_LIKE:
            style = styles.boxFunny;
            image = IMAGES.iconFunny;
            number = data.like;
            break;
        case DEFINE.REACTION_DISLIKE:
            style = styles.boxSad;
            image = IMAGES.iconSad;
            number = data.dislike;
            break;
        case DEFINE.REACTION_LOVE:
            style = styles.boxHappy;
            image = IMAGES.iconHappy;
            number = data.love;
            break;
        default:
            break;
    }

    return (
        <TouchableOpacity onPress={() => onReaction(status)} style={[styles.box, style,
        (activeStatus === status) ? styles.active : {}
        ]}>
            <Image source={image} />
            <Text style={styles.number}>{(activeStatus === status) ? number + 1 : number}</Text>
        </TouchableOpacity>
    )
}