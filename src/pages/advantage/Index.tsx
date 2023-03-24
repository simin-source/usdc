import Banner from '@/components/Advantage/banner/index';
import Card from '@/components/Advantage/card/index';
import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';

export default defineComponent({
    name: 'Advantage',
    render() {
        return <Fragment>
            <Header parent="advantage" />
            <Banner />
            <Card />
            <Footer parent="advantage" />
        </Fragment>;
    },
});