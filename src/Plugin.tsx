import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WidgetCollapsible } from "./WidgetCollapsible";
import { PluginContent } from "./PluginContent";

const queryClient = new QueryClient();

// Important - do not change this file

export default function Plugin() {
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