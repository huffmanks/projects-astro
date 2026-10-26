import Button from "../../common/Button";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
      <Button bgColor="dark" textColor="blue" text="Design" />
      <Button bgColor="transparent" textColor="category" text="Tech" />
      <Button bgColor="transparent" textColor="category" text="Marketing" />
      <Button bgColor="transparent" textColor="category" text="Business" />
      <Button bgColor="transparent" textColor="category" text="Customer Services" />
    </div>
  );
};

export default Categories;
