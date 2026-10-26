import Button from "./common/Button";
import { blogStories } from "./constants/blogStories";

const BlogSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-10 pb-24">
      <div className="mb-24 flex flex-col items-center justify-between gap-16 lg:flex-row lg:items-end">
        <div className="xms:text-5xl xms:text-left max-w-100 text-center text-3xl font-bold">
          <div className="text-balance">Always keep up to date with our daily news</div>
        </div>

        <div className="flex flex-col gap-x-16 gap-y-8 sm:flex-row sm:items-end">
          <div className="max-w-68.75">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-6 bg-orange-400"></div>
              <div className="text-orange-400">Latest blogs</div>
            </div>

            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore saepe vero
              deserunt consequuntur ab animi.
            </div>
          </div>

          <div>
            <Button color="light" text="All articles" />
          </div>
        </div>
      </div>

      <div className="xs:flex-row xs:overflow-x-auto flex snap-x snap-mandatory flex-col justify-between gap-x-16 gap-y-8 pb-12">
        {blogStories.map((blog) => (
          <div key={blog.id} className="relative snap-center snap-always">
            <div className="xs:w-80 w-full">
              <img src={blog.image.src} alt={blog.title} />
              <div className="absolute right-0 bottom-0 left-0 bg-black/70 p-4">
                <div className="mb-2 text-lg font-bold text-orange-400">{blog.title}</div>
                <div className="text-sm">{blog.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
