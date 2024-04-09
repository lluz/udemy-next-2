import homeImg from '@/public/home.jpg';
import Hero from '@/src/components/hero';

export default function Home() {
  return (
    <>
      <h3><strong>Home Page</strong></h3>
      
      {/* <div className="absolute -z-10 w-52 h-52">
        <Image
          src={homeImg}
          alt="car factory"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div> */}

      <Hero imgAlt='AAAAAA' title='AAAAAA' imgData={homeImg} />

    </>
  );
}
