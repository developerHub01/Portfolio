import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <Button>Home</Button>
      {Array.from({ length: 10 }, (_, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo
          cumque temporibus at eligendi dolorum harum veniam, doloribus maiores
          eum quam iusto impedit. Eveniet, quisquam. Asperiores libero natus
          dicta itaque.
        </p>
      ))}
    </>
  );
}
