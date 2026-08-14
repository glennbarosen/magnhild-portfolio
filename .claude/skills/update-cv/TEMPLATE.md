# CV entry template

Use this template to add new entries to the CV data file at `src/data/cv.ts`.

## Work Experience Entry

```typescript
{
  title: string;
  company: string;
  type?: string;
  period: string;
  description?: string;
}
```

## Education Entry

```typescript
{
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

```

## Volunteer Experience Entry

```typescript
{
  organization: string;
  role: string;
  period: string;
}
```
