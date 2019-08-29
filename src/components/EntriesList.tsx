import { Checkbox, List, Tag } from "antd";
import * as React from "react";

import { IToDoEntry } from "../interfaces";

interface IEntryProps {
    entry: IToDoEntry;
    onStatusToggle(entryId): void;
}

interface IListProps {
    entries: IToDoEntry[];
    onStatusToggle(entryId: symbol): void;
}

const randomColor = (): string => {
    const hex = [...Array(6).keys()]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");

    return `#${hex}`;
};

const EntryCheck = (props: IEntryProps): JSX.Element => (
    <Checkbox
        checked={props.entry.completed}
        onChange={props.onStatusToggle.bind(null, props.entry.id)}
    />
);

const Entry = (props: IEntryProps): JSX.Element => {

    // @TODO Dichiare `descr` e popola la stringa con la dueDate quando disponibile, o ""

    // @TODO Dichiara `tags` (JSX.Element[]). Popolala iterando props.entry.tags e ritorna:
    // <Tag color={randomColor()} key={tag}>
    //     {tag}
    // </Tag>
    // nella funzione che esegui ad ogni passo dell'iterazione.

    const toggleStatus = (
        <EntryCheck
            key="lisitem-check"
            entry={props.entry}
            onStatusToggle={props.onStatusToggle}
        />
    );

    return (
        <List.Item actions={[toggleStatus]}>
            <List.Item.Meta
                description={descr}
                title={props.entry.description}
            />
            <div>{tags}</div>
        </List.Item>
    );
};

// This is a stateless Component.
export const EntriesList = (props: IListProps): JSX.Element => {
    const renderItem = (entry: IToDoEntry): JSX.Element => (
        <Entry entry={entry} onStatusToggle={props.onStatusToggle} />
    );

    const header: JSX.Element = 1;

    return (
        <List
            bordered={true}
            dataSource={props.entries}
            header={header}
            renderItem={renderItem}
        />
    );
};
