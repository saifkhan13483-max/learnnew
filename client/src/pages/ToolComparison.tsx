import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Circle } from "lucide-react";

interface Tool {
  name: string;
  bestFor: string;
  learningCurve: string;
  pricing: string;
  designFreedom: string;
  logicCapability: string;
}

const tools: Tool[] = [
  {
    name: "Framer",
    bestFor: "Marketing sites",
    learningCurve: "Low",
    pricing: "$",
    designFreedom: "High",
    logicCapability: "Low"
  },
  {
    name: "Webflow",
    bestFor: "Complex websites",
    learningCurve: "Medium",
    pricing: "$$",
    designFreedom: "Very High",
    logicCapability: "Medium"
  },
  {
    name: "Bubble",
    bestFor: "Web apps",
    learningCurve: "High",
    pricing: "$$$",
    designFreedom: "Medium",
    logicCapability: "Very High"
  },
  {
    name: "Softr",
    bestFor: "Quick MVPs",
    learningCurve: "Low",
    pricing: "$$",
    designFreedom: "Low",
    logicCapability: "Medium"
  },
  {
    name: "Notion",
    bestFor: "Docs/content",
    learningCurve: "Very Low",
    pricing: "Free",
    designFreedom: "Very Low",
    logicCapability: "Very Low"
  },
  {
    name: "Airtable",
    bestFor: "Databases",
    learningCurve: "Low",
    pricing: "$$",
    designFreedom: "N/A",
    logicCapability: "Medium"
  },
  {
    name: "Replit",
    bestFor: "Full apps",
    learningCurve: "Medium",
    pricing: "$",
    designFreedom: "Full",
    logicCapability: "Full"
  },
  {
    name: "Lovable",
    bestFor: "Quick prototypes",
    learningCurve: "Low",
    pricing: "$$",
    designFreedom: "High",
    logicCapability: "Medium"
  }
];

const getLearningCurveColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "very low":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "low":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "high":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const getCapabilityColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "very low":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    case "low":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "high":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "very high":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "full":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function ToolComparison() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" data-testid="heading-tool-comparison">
            No-Code Tool Comparison
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="text-comparison-description">
            Compare popular no-code platforms and find the best tool for your project
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle data-testid="heading-comparison-table">Tool Comparison Table</CardTitle>
            <CardDescription>
              Detailed comparison of features, pricing, and capabilities across leading no-code platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold w-[140px]" data-testid="header-tool">Tool</TableHead>
                    <TableHead className="font-semibold" data-testid="header-best-for">Best For</TableHead>
                    <TableHead className="font-semibold" data-testid="header-learning-curve">Learning Curve</TableHead>
                    <TableHead className="font-semibold" data-testid="header-pricing">Pricing</TableHead>
                    <TableHead className="font-semibold" data-testid="header-design-freedom">Design Freedom</TableHead>
                    <TableHead className="font-semibold" data-testid="header-logic-capability">Logic Capability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tools.map((tool, index) => (
                    <TableRow key={tool.name} data-testid={`row-tool-${index}`}>
                      <TableCell className="font-medium" data-testid={`cell-name-${index}`}>
                        {tool.name}
                      </TableCell>
                      <TableCell data-testid={`cell-best-for-${index}`}>
                        {tool.bestFor}
                      </TableCell>
                      <TableCell data-testid={`cell-learning-curve-${index}`}>
                        <Badge variant="secondary" className={getLearningCurveColor(tool.learningCurve)}>
                          {tool.learningCurve}
                        </Badge>
                      </TableCell>
                      <TableCell data-testid={`cell-pricing-${index}`}>
                        <span className="font-semibold">{tool.pricing}</span>
                      </TableCell>
                      <TableCell data-testid={`cell-design-freedom-${index}`}>
                        <Badge variant="secondary" className={getCapabilityColor(tool.designFreedom)}>
                          {tool.designFreedom}
                        </Badge>
                      </TableCell>
                      <TableCell data-testid={`cell-logic-capability-${index}`}>
                        <Badge variant="secondary" className={getCapabilityColor(tool.logicCapability)}>
                          {tool.logicCapability}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
