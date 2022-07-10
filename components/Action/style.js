import { StyleSheet } from 'react-native';

import { COLORS } from './../../contains';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 44,
    },
    box: {
        borderColor: COLORS.white,
        borderWidth: 3,
        paddingVertical: 5,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 20,
        shadowOpacity: 0.1,
        elevation: 5,
        shadowColor: COLORS.shadowBox
    },
    boxFunny: {
        backgroundColor: COLORS.funny
    },
    boxSad: {
        backgroundColor: COLORS.sad
    },
    boxHappy: {
        backgroundColor: COLORS.happy
    },
    number: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.number,
        marginTop: 11
    },
    active: {
        borderColor: COLORS.active,
        borderWidth: 3
    }
});
