import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [count, setCount] = useState(5);
  const router = useRouter();

  let timer = setInterval(() => {
    setCount(count - 1);
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div className="error">
      <h1>
        Ничего не найдено <span>😕</span>
      </h1>
      <h1>
        Перейдите на главную
        <Link href="/">
          <span className="error_pages">страницу</span>
        </Link>
      </h1>
      <span>
        или Вас перекинет на главную страницу через <p>{count}</p>
      </span>
    </div>
  );
};

export default NotFound;
