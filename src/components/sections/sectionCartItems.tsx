export default function SectionCartItems() {
    return (
        <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
        >
            <div className="p-6 flex flex-row items-start space-y-0 gap-4">
                <div className="grid gap-1">
                    <h3 className="whitespace-nowrap tracking-tight text-lg font-bold">
                        Order #123456
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        Purchased on 12th March 2023, 10:24 AM
                    </p>
                </div>
                <div className="flex-1 min-w-0 text-right">
                    <p className="text-muted-foreground text-sm">2 items</p>
                </div>
            </div>
            <div className="p-0">
                <div className="grid gap-4">
                    <div className="grid grid-cols-3 items-start gap-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/placeholder.svg"
                                width="80"
                                height="80"
                                alt="Thumbnail"
                                className="rounded-lg"
                            />
                            <div className="grid gap-1.5">
                                <h3 className="font-bold text-base leading-none">
                                    Fresh Cilantro
                                </h3>
                                <p className="text-sm leading-none">
                                    Grocery &amp; Produce
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm">Qty</div>
                            <div className="font-semibold">1</div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="text-sm text-right">
                                <div className="font-semibold">Price</div>
                                <div className="font-semibold">Total</div>
                            </div>
                            <div className="grid gap-1 text-sm ml-auto">
                                <div className="font-semibold">$1.29</div>
                                <div className="font-semibold">$1.29</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t grid grid-cols-3 items-start pt-4 gap-4">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/placeholder.svg"
                                width="80"
                                height="80"
                                alt="Thumbnail"
                                className="rounded-lg"
                            />
                            <div className="grid gap-1.5">
                                <h3 className="font-bold text-base leading-none">
                                    Sparkling Water
                                </h3>
                                <p className="text-sm leading-none">
                                    Beverages
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm">Qty</div>
                            <div className="font-semibold">2</div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="text-sm text-right">
                                <div className="font-semibold">Price</div>
                                <div className="font-semibold">Total</div>
                            </div>
                            <div className="grid gap-1 text-sm ml-auto">
                                <div className="font-semibold">$2.00</div>
                                <div className="font-semibold">$4.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center p-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="text-sm">
                    <p className="text-sm text-muted-foreground">Total</p>
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                        $5.29
                    </h3>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                    Track Order
                </button>
            </div>
        </div>
    );
}
