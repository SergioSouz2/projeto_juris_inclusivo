import React from "react";

interface MenuProps {
    title?: string;
    items: [
        item1?: string,
        item2?: string,
        item3?: string,
        item4?: string,
        item5?: string,
        item6?: string,
        item7?: string,
        item8?: string,
    ];
}



export function Menu({ items, title }: MenuProps) {
    return (
        <div className="px-4 pt-7">

            <h2 className="text-xl font-semibold mb-2 text-primary">{title}</h2>

            <div>
                <div className="space-y-4">

                    {
                        items.map((item) => (
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="Bootcamp "
                                    className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="Bootcamp" className="ml-2 text-sm font-medium text-black">
                                    {item}
                                </label>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}
