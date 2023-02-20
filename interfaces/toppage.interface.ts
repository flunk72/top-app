export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}
export interface TopPageAdvantage {
  description: string;
  title: string;
  _id: string;
}

export interface HhData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface TopPageModel {
  tags: string[];
  _id: string;
  secondCategory:string;
  alias:string;
  title:string;
  category:string;
  seoText:string;
  tagsTitle:string;
  metaTitle:string;
  metaDescription:string;
  firstCategory: TopLevelCategory;
  advantages: TopPageAdvantage[];
  createDate: Date;
  updatedAt: Date;
  hh: HhData;
}
