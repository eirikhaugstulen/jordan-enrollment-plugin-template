import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WidgetCollapsible } from "./WidgetCollapsible";
import { PluginContent } from "./PluginContent";
import { EnrollmentOverviewProps } from "./Plugin.types";

const queryClient = new QueryClient();

// Important - make sure to not add functionality to this file, pit it on the PluginContent component instead

export default function Plugin({  }: EnrollmentOverviewProps) {
    const [open, setOpen] = useState(true);

    return (
        <QueryClientProvider client={queryClient}>
            <WidgetCollapsible
                header="Enrollment plugin"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            >
                <div style={{ padding: "8px 16px", minHeight: "200px" }}>
                    <PluginContent />
                </div>
            </WidgetCollapsible>
        </QueryClientProvider>
    );
}