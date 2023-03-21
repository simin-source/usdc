import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Use',
    render() {
        return <Fragment>
        <Header parent="use" />
        <Footer parent="use"/>
    </Fragment>;
    },
});