type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    total: number;
    createdAt?: Date;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; //联合类型
    save: () => void;
    update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
    remove: (id: string) => boolean;
}
interface Window {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: TagListModel['update'];
    findTag: (id: string) => Tag | undefined;
}