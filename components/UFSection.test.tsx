// @ts-nocheck
import React from "react";
import { render, screen } from "@testing-library/react";
import { UFSection } from "./UFSection";
import * as useUFHook from "../hooks/useUF";

jest.mock("@/hooks/useUF", () => ({
  useUF: jest.fn(),
}));

describe("UFSection", () => {
  it("shows loading state", () => {
    useUFHook.useUF.mockReturnValue({
      date: new Date(),
      loading: true,
      ufValue: null,
      formatedDate: "",
      handleChangeDate: jest.fn(),
    });

    render(<UFSection />);
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  it("shows data when loading is false and ufValue is present", () => {
    useUFHook.useUF.mockReturnValue({
      date: new Date("2023-01-01"),
      loading: false,
      ufValue: "30.000,00",
      formatedDate: "2023-01-01",
      handleChangeDate: jest.fn(),
    });

    render(<UFSection />);
    expect(screen.getByText("$ 30.000,00")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2023-01-01")).toBeInTheDocument();
  });
});
