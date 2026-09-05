import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
};

serve(async (req) => {
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

    // Knowledge base for law education questions
    const responses: Record<string, string> = {
      "law courses": "LegalPath offers comprehensive law courses including Constitutional Law, Criminal Law, Civil Law, Corporate Law, and more. Each course includes structured modules, real case studies, and practical applications. You can choose from beginner to advanced levels based on your current knowledge.",
      
      "entrance exam": "Our mock entrance tests are designed to match the format and difficulty of actual legal entrance exams (CLAT, AIBE, etc.). We provide detailed solutions, performance analytics, and personalized study recommendations based on your results.",
      
      "admission": "We help with law school admission preparation through dedicated modules, document guidance, and interview preparation. Our mentors provide insights into different law schools and admission processes across India.",
      
      "mentorship": "Connect with experienced advocates and legal professionals through our mentorship program. Get 1-on-1 guidance, career roadmaps, internship opportunities, and real-world legal practice insights.",
      
      "study resources": "Access our extensive library of study materials including case summaries, statutory notes, practice questions, and video lectures. All resources are curated by legal experts and updated regularly.",
      
      "mock tests": "Take unlimited mock tests covering various law entrance exams and bar association tests. Get instant results, detailed explanations, and performance tracking to identify weak areas.",
      
      "career guidance": "Our expert mentors provide personalized career guidance, helping you choose between different legal specializations, understand market demands, and prepare for internships and placements.",
      
      "pricing": "LegalPath offers flexible pricing plans. We have a free trial to explore our platform, monthly subscriptions, and annual plans with significant discounts. Contact our sales team for enterprise packages.",
      
      "support": "Our support team is available 24/7 to help with technical issues, course content questions, and general guidance. You can reach us through email, chat, or phone.",
    };

    // Find best matching response
    const lowerMessage = message.toLowerCase();
    let response = "I'm here to help! I can answer questions about law courses, entrance exams, admissions, mentorship, study resources, and more. What would you like to know?";

    for (const [key, value] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        response = value;
        break;
      }
    }

    return new Response(JSON.stringify({ response }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
