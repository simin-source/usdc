import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Outmoney',
    render() {
        return <Fragment>
        <Header parent="outmoney" />
        <Footer parent="outmoney"/>
    </Fragment>;
    },
});