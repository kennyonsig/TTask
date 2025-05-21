export interface ITreeNode {
  id: number;
  title: string;
  is_deleted: boolean;
  children: ITreeNode[];
  deleted_at?: string | null;
}
