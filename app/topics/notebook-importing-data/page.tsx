import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notebook Importing Data - The Intel Analyst Academy",
  description: "Learn how to import data from various sources and manage large datasets effectively.",
}

const topicContent = `← Back to Analyst's Notebook Learning Path

# Importing and Managing Data

Learn how to import data from various sources and manage large datasets effectively.

## Data Import Capabilities

Analyst's Notebook allows you to import data from various sources, transforming raw information into
visual intelligence products. Mastering data import techniques is essential for working with large
datasets and complex investigations.

## Key Skills Covered

- Importing data from Excel spreadsheets
- Working with CSV and structured text files
- Using the Import Specification Designer
- Creating reusable import specifications
- Handling different data formats
- Mapping data fields to entity properties
- Dealing with data quality issues
- Merging data from multiple sources

## Data Management Best Practices
When working with large datasets in Analyst's Notebook, consider these best practices:

- Standardize your data before importing
- Create templates for recurring data imports
- Use consistent naming conventions
- Document your import specifications
- Validate imported data for accuracy
- Use filters to manage visual complexity
- Create separate charts for different aspects of analysis

## Advanced Data Integration
As your skills develop, you can explore more advanced data integration techniques:

- Connecting to databases directly
- Working with i2 iBase
- Using the i2 Connect gateway
- Creating custom data connectors
- Automating regular data imports

### Additional Resources

-

Import Specification Templates

-

Data Preparation Guide

### Next Topics

-

Advanced Analysis Features

-

Geospatial Mapping

## Why Import Data Matters

Analyst's Notebook is most powerful when it works with real data rather than manually entered information. Importing data from structured sources saves time, reduces errors, and enables analysis at scales that would be impractical with manual entry.

- **Time Efficiency:** Manually entering hundreds of entities and links is impractical for any real-world investigation. Importing from spreadsheets, databases, or structured text files can reduce days of data entry to minutes.
- **Consistency:** Automated imports apply consistent formatting, reducing the risk of duplicate entries, inconsistent naming, or missed connections.
- **Scale:** As investigations grow, the volume of data quickly exceeds the capacity of manual methods. Importing allows analysts to work with thousands of entities and relationships.

## Supported Data Formats

Analyst's Notebook can import data from a variety of structured formats:

- **CSV and Excel:** The most common import method. Columns in the spreadsheet map to entity or link attributes in the chart. A simple spreadsheet with columns for "Name," "Role," "Phone Number," and "Last Contact Date" can become a fully populated analysis chart in minutes.
- **XML:** Structured XML files allow more complex imports, including hierarchical relationships, nested attributes, and conditional formatting rules.
- **Database Connections:** Analyst's Notebook can connect directly to SQL databases, importing data from existing case management systems, intelligence databases, or commercial data sources.
- **API Feeds:** Custom scripts and integrations can feed data from REST APIs directly into Analyst's Notebook, enabling near-real time analysis of streaming data.

## The Import Workflow

A structured import process ensures data integrity and maximises analytical value:

1. **Data Preparation:** Before importing, clean and normalise the source data. Standardise date formats, remove duplicates, resolve inconsistencies in names or identifiers, and ensure that relationship data includes both endpoints.
2. **Schema Mapping:** Define how fields in the source data map to entity types, link types, and attributes in Analyst's Notebook. For example, a "phone_number" column in the spreadsheet maps to the "Phone" attribute of a "Person" entity type.
3. **Import Execution:** Run the import and review the results immediately. Check entity counts, link counts, and attribute values to confirm the import matched expectations.
4. **Validation:** Spot-check imported data against the source to ensure accuracy. Pay particular attention to links - incorrectly imported relationships are harder to spot than missing entities.
5. **Cleanup:** Remove or merge any duplicate entities created by the import process. Apply styling to distinguish imported data from manually entered data.

## Common Import Pitfalls

Even experienced analysts encounter common issues when importing data:

- **Date Format Mismatches:** Different systems use different date formats (DD/MM/YYYY vs MM/DD/YYYY, Unix timestamps, ISO 8601). Ensure your import settings match the source data format.
- **Unicode and Special Characters:** Names and locations may include characters that don't translate cleanly between systems. Test imports with a small sample before running a full import.
- **Duplicate Entities:** If the same person appears in multiple source records with slightly different names ("John Smith" vs "Jon Smith"), the import will create separate entities that must be manually merged.
- **Missing Link Endpoints:** Relationship data (calls, meetings, transactions) requires both a source and a target. Records missing one endpoint will fail to import as links.

`

export default function NotebookimportingdataPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Importing and Managing Data"
        subtitle="Learn how to import data from various sources and manage large datasets effectively."
        humorSubtitle="Where the intelligence community's best-kept secrets come to light (allegedly)"
        readTime={15}
        difficulty="Intermediate"
        category="Intelligence Analysis"
        mascot="foundations"
        mascotMessage="Another day, another intelligence problem to solve. Let's get to work."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="notebook-importing-data" />
      </MicroLesson>
    </LessonContainer>
  )
}
