import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type customButtom = {
    onClick?: () => any;
    nameButton?: string;
    isLoading?: boolean;
};

export function ButtonLoading(props: customButtom) {
    return (
        <Button onClick={props.onClick} disabled={props.isLoading}>
            {props.isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {props.nameButton}
        </Button>
    );
}
