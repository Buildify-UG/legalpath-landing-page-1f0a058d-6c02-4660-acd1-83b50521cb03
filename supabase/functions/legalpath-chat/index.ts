import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
};

const knowledgeBase: Record<string, string> = {
  "law courses": "LegalPath offers comprehensive law courses including Constitutional Law, Criminal Law, Civil Law, Corporate Law, and more. Each course includes structured modules, real case studies, and practical applications. You can choose from beginner to advanced levels.",
  "entrance exam": "Our mock entrance tests are designed to match actual legal entrance exams (CLAT, AIBE, etc.). We provide detailed solutions, performance analytics, and personalized study recommendations based on your results.",
  "admission": "We help with law school admission preparation through dedicated modules, document guidance, and interview preparation. Our mentors provide insights into different law schools and admission processes.",
  "mentorship": "Connect with experienced advocates through our mentorship program. Get 1-on-1 guidance, career roadmaps, internship opportunities, and real-world legal practice insights.",
  "study resources": "Access our extensive library including case summaries, statutory notes, practice questions, and video lectures. All resources are curated by legal experts and updated regularly.",
  "mock tests": "Take unlimited mock tests covering various law entrance exams. Get instant results, detailed explanations, and performance tracking to identify weak areas.",
  "career guidance": "Our expert mentors provide personalized career guidance, helping you choose legal specializations, understand market demands, and prepare for internships.",
  "pricing": "LegalPath offers flexible pricing plans with free trial, monthly subscriptions, and annual plans with discounts. Contact our sales team for enterprise packages.",
  "support": "Our support team is available 24/7 to help with technical issues, course content questions, and general guidance via email, chat, or phone.",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "Message required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const lowerMessage = message.toLowerCase();
    let response = "I am here to help! I can answer questions about law courses, entrance exams, admissions, mentorship, study resources, and more. What would you like to know?";

    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    return new Response(JSON.stringify({ response }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMsg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
