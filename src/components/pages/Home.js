import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

import Countdown from "../inc/Countdown";

function Home() {
  return (
    <div>
      <div className="main-content">
      
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            Make Your Voice Heard in the 2024 Presidential Election!
          </h1>
          <p style={{ margin: "20px 0", lineHeight: "1.6", padding: "0 20px" }}>
            Your vote is your voice, and this upcoming election is your chance
           to shape the future. By casting your vote, you're not only
            exercising a fundamental right but also making an impact on critical
            issues that affect you, your community, and the nation. Whether it's
            the economy, healthcare, or climate change, the policies and leaders
            chosen today will determine tomorrow's direction. Every vote counts,
            and together, we can create the change we want to see. Don’t miss
            your opportunity to participate—vote and make a difference!
          </p>
          </div> 
          <div className="main-content"><Countdown targetDate="2024-09-21T08:00:00" /></div>
          
          
        


      <div class="container">
        <div id="card-WinPredictor" class="card mt-4">
          <div id="card-WinPredictor-body" class="card-body">
            <div id="card-WinPredictor-background" class="card-background">
              <div class="overlay"></div>
              <h5 class="card-title">Win Predictor</h5>
              <p
                class="card-text"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Win Predictor analyzes real-time data and trends for the 2024
                Presidential Election, forecasting potential outcomes and
                offering insights based on current information.
              </p>
              <Link to="/WinPredictor" class="btn btn-primary">
                Win Predictor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div id="card-WinPredictor" class="card mt-4">
          <div id="card-WinPredictor-body" class="card-body">
            <div
              id="card-ManifestoComparator-background"
              class="card-background"
            >
              <div class="overlay"></div>
              <h5 class="card-title">Manifesto Comparator</h5>
              <p
                class="card-text"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                This feature enables you to view and compare the manifestos of
                different candidates side by side, simplifying the evaluation of
                their promises, goals, and key points.
              </p>
              <Link to="/manifestocomparator" class="btn btn-primary">
                Manifesto Comparator
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div id="card-WinPredictor" class="card mt-4">
          <div id="card-WinPredictor-body" class="card-body">
            <div id="card-ChatBot-background" class="card-background">
              <div class="overlay"></div>
              <h5 class="card-title">Chatbot</h5>
              <p
                class="card-text"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                An advanced chatbot that uses AI to provide instant, verified
                answers to user inquiries about candidates, their manifestos,
                and election details, ensuring reliable and accurate
                information.
              </p>
              <Link to="/chatbot" class="btn btn-primary">
                Chatbot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
