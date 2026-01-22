// SolutionsAndPartners.tsx
import Solutions from './Solutions';
import Partners from './Partners';

const SolutionsAndPartners = () => {
  return (
    <section
      className="relative -mt-24 pt-24 overflow-hidden"
      style={{
        background: `
          radial-gradient(
            900px 900px at 15% 20%,
            rgba(147, 51, 234, 0.18),
            rgba(255, 255, 255, 0) 60%
          ),
          linear-gradient(
            135deg,
            #ffffff 0%,
            #f6f0ff 40%,
            #efe7ff 70%,
            #ffffff 100%
          )
        `,
      }}
    >
      <Solutions />
      <Partners />
    </section>
  );
};

export default SolutionsAndPartners;
