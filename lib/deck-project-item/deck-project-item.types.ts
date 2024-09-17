import { IKeyData } from "../models/dataset-tree.model";

export interface IDeckProjectItemProps<T> {
  project: {
    header: IKeyData;
    data: T[];
  };
  itemTemplate: (item: T) => React.ReactElement;
}
