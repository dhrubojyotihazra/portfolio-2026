"use client";
import React from 'react';
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      <SmokeBackground smokeColor="#ff4d00" />
    </div>
  );
}
