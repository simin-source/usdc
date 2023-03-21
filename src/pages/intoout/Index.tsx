import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Intoout',
    render() {
        return <Fragment>
        <Header parent="intoout" />
        <div style={{ marginTop: '150px' }}>intoout</div>
        <Footer parent="intoout"/>
    </Fragment>;
    },
});