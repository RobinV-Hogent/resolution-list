export const schemas = {
    Goal: {
        type: "object",
        properties: {
            id: { type: "integer" },
            title: { type: "string" },
            description: { type: "string", nullable: true },
            value: { type: "number" },
            snapshots: {
                type: "array",
                items: { $ref: "#/components/schemas/Snapshot" },
            },
        },
    },
    Snapshot: {
        type: "object",
        properties: {
            id: { type: "integer" },
            value: { type: "number" },
            date: { type: "string", format: "date-time" },
            goalId: { type: "integer" },
        },
    },
};
