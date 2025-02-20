import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    containerGrad: {
        flex: 1,
        position: 'relative',
        height: "100%",
        width: '80%'
    },

    TitleHome1: {
        marginHorizontal: "-38%",
        top: "-50%",
    },
    TitleHome2: {
        marginHorizontal: "-12.5%",
        top: "-99%",
    },

    contentContainer: {
        flex: 1,
        paddingBottom: 40,
    },
    header: {
        padding: 20,
        paddingTop: 40,
    },
    headerSmall: {
        fontSize: 18,
        color: '#8B5CF6',
        fontWeight: '500',
    },
    headerLarge: {
        fontSize: 28,
        color: '#8B5CF6',
        fontWeight: 'bold',
    },
    mainCta: {
        backgroundColor: '#FFFFFF',
        margin: 16,
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },

    ctaContainer: {
        flexDirection:"row",
        flex: 1,
        backgroundColor: '#fbfbfb',
        margin: 16,
        padding: 16,
        borderRadius: 12,
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 15,
        top: "-10%",
        position: 'relative',
    },

    ctaTextContainer: {
        flex: 1,
    },

    ctaText: {
        fontSize: 16,
        color: '#687cce',
        fontWeight: '600',
        marginBottom: 4,
        lineHeight: 20
    },

    ctaSubtext: {
        fontSize: 12,
        color: '#6B7280',
        marginVertical: "5%",
        lineHeight: 20
    },
    ctaImageContainer: {

      alignItems: 'center',

    },

    ctaImage: {
        width: "90%",
        height: "90%",
        marginLeft: "40%",
    },
    menuContainer: {
        top: "-5%"
    },

    menuItem: {
        backgroundColor: '#eaf0fb',
        margin: 16,
        marginTop: 8,
        marginBottom: 8,
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#f5f3fc',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 15,
    },

    menuIconContainer: { 
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 8,
        marginRight: 12,
        shadowColor: '#f5f3fc',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0.5,
        elevation: 20,
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
    menuTextContainer: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 16,
        color: '#687cce',
        fontWeight: '600',
        marginBottom: 4,
    },
    menuSubtitle: {
        fontSize: 10,
        color: '#6B7280',
        lineHeight: 20,
    },
});

export default HomeStyles;