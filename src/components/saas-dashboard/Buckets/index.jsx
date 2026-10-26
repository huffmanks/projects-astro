import { buckets } from "../constants";
import Bucket from "./Bucket";
import Styles from "./styles.module.css";

const Buckets = () => {
  return (
    <main className="w-full px-5 py-12 sm:pr-8 sm:pl-10">
      <div
        className={`${Styles.scrollbar} flex snap-x snap-mandatory flex-col gap-10 scroll-smooth md:flex-row md:overflow-x-auto`}>
        {buckets.map((bucket, i) => (
          <Bucket key={i} bucket={bucket} />
        ))}
      </div>
    </main>
  );
};

export default Buckets;
