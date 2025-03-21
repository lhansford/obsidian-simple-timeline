import { describe, expect, it } from "vitest";
import { extractDateTime } from "./extractDateTime";

describe('extractDateTime', () => {
  describe('When the given text starts with a valid date and a colon', () => {
    it('Should remove the date from the string and return both the modified string and the date', () => {
      const { modifiedText, dateTime } = extractDateTime('2021-08-13: This is a test');
      expect(modifiedText).toBe('This is a test');
      expect(dateTime).toBe('2021-08-13');
    });
  });

  describe('When the given text starts with a valid date but no colon', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('2025-03-21 This is a test');
      expect(modifiedText).toBe('2025-03-21 This is a test');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text does not start with a valid date', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('This is a test');
      expect(modifiedText).toBe('This is a test');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text contains a valid date, but not at the start of the string', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('This is a test: 2025-03-21: hello world');
      expect(modifiedText).toBe('This is a test: 2025-03-21: hello world');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text contains a valid date, but at the end of the string', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('This is a test: 2025-03-21:');
      expect(modifiedText).toBe('This is a test: 2025-03-21:');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text starts with a valid date and time and a colon', () => {
    it('Should remove the date from the string and return both the modified string and the date', () => {
      const { modifiedText, dateTime } = extractDateTime('2021-08-13 13:23: This is a test');
      expect(modifiedText).toBe('This is a test');
      expect(dateTime).toBe('2021-08-13 13:23');
    });
  });

  describe('When the given text starts with a valid date and time but no colon', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('2025-03-21 13:23 This is a test');
      expect(modifiedText).toBe('2025-03-21 13:23 This is a test');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text does not start with a valid date and time', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('This is a test');
      expect(modifiedText).toBe('This is a test');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text contains a valid date and time, but not at the start of the string', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('This is a test: 2025-03-21 13:23: hello world');
      expect(modifiedText).toBe('This is a test: 2025-03-21 13:23: hello world');
      expect(dateTime).toBe(null);
    });
  });

  describe('When the given text contains a valid date and time, but at the end of the string', () => {
    it('Should return the original string and null', () => {
      const { modifiedText, dateTime } = extractDateTime('This is a test: 2025-03-21 13:23:');
      expect(modifiedText).toBe('This is a test: 2025-03-21 13:23:');
      expect(dateTime).toBe(null);
    });
  });
});

