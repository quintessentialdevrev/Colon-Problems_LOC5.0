import Spline from '@splinetool/react-spline';
import GridBlurredBackdrop from '../components/testimonial'
import BasicStatistics from '../components/statistics'
import ContactFormWithSocialButtons from '../components/contactus'
import './App.css'

export default function App() {
  return (
    <>
      <Spline scene="https://prod.spline.design/ENWapOdF16uKVuSe/scene.splinecode" />
      <GridBlurredBackdrop />
      <BasicStatistics />
      <ContactFormWithSocialButtons />
    </>
  );
}
