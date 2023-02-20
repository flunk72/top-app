import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/layout/Layout";
import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="s">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laboriosam
        minus asperiores dolorum impedit tempore neque voluptatibus, rem
        distinctio eum esse, laborum maiores tempora, doloribus aliquid sit
        nihil? A, quidem?
      </P>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laboriosam
        minus asperiores dolorum impedit tempore neque voluptatibus, rem
        distinctio eum esse, laborum maiores tempora, doloribus aliquid sit
        nihil? A, quidem?
      </P>
      <P size="l">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laboriosam
        minus asperiores dolorum impedit tempore neque voluptatibus, rem
        distinctio eum esse, laborum maiores tempora, doloribus aliquid sit
        nihil? A, quidem?
      </P>
      <Tag size="s" color="red">
        hh.ru
      </Tag>
      <Tag size="s" color="green">
        {" "}
        green
      </Tag>
      <Tag size="s" color="grey">
        {" "}
        grey
      </Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
