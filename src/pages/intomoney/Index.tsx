import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Intomoney',
    render() {
        return <Fragment>
        <Header parent="intomoney" />
        <Footer parent="intomoney"/>
    </Fragment>;
    },
});