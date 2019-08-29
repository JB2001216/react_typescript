import { Col, Layout, Row } from "antd";
import * as React from "react";

import { IToDoEntry } from "../interfaces";

interface IState {
    entries: IToDoEntry[];
}

// You can provide interfaces for props and state directly in the class declaration.
// Here, props is an empty object and state is IState.
export class RootView extends React.PureComponent<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = { entries: [] };

        this.addNewEntry = this.addNewEntry.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
    }

    public componentDidMount(): void {
        this.addNewEntry("Test description", ["tag1", "tag2"]);
    }

    public render(): JSX.Element {
        return (
            <Layout>
                <Layout.Content className="root-content">
                    <Row>
                        <Col span={24}>
                            <h1>ToDo App</h1>
                        </Col>
                    </Row>
                </Layout.Content>
            </Layout>
        );
    }

    // You can define both function params and return
    private addNewEntry(
        description: string,
        tags: string[],
        dueDate?: Date,
    ): void {
        // @TODO Crea una nuova entry, appendila a state.entries, aggiornando poi lo stato del componente
    }

    private toggleStatus(entryId: symbol): void {
        this.setState((state) => {
            // On VScode, if you hover over `entries`, it will describe it as `IToDoEntry`.
            // This thanks to the Typescript type inference and VScode that has an advanced support to Typescript.
            // For more details, see https://www.typescriptlang.org/docs/handbook/type-inference.html.

            // @TODO Dichiara `entries` (IToDoEntry[]).
            // Popola `entries` iterand state.entries, trovando
            // la entry con lo stesso entryId e inverti lo status `completed`.

            return {
                entries,
            };
        });
    }
}
